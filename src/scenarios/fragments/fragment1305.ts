import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1303 } from "./fragment1303";
import type { FragmentToken1304 } from "./fragment1304";

export const FRAGMENT_1305 = gql(`
  fragment Fragment1305 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult1305 = ResultOf<typeof FRAGMENT_1305>;
type FragmentSelf1305 = NonNullable<FragmentResult1305>;

export type FragmentToken1305 =
  | FragmentSelf1305["__typename"]
  | FragmentSelf1305["typenameHint"] | FragmentToken1303 | FragmentToken1304;
