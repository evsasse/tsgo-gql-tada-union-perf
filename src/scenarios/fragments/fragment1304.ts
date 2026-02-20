import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1302 } from "./fragment1302";
import type { FragmentToken1303 } from "./fragment1303";

export const FRAGMENT_1304 = gql(`
  fragment Fragment1304 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult1304 = ResultOf<typeof FRAGMENT_1304>;
type FragmentSelf1304 = NonNullable<FragmentResult1304>;

export type FragmentToken1304 =
  | FragmentSelf1304["__typename"]
  | FragmentSelf1304["typenameHint"] | FragmentToken1302 | FragmentToken1303;
