import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1022 } from "./fragment1022";
import type { FragmentToken1023 } from "./fragment1023";

export const FRAGMENT_1024 = gql(`
  fragment Fragment1024 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult1024 = ResultOf<typeof FRAGMENT_1024>;
type FragmentSelf1024 = NonNullable<FragmentResult1024>;

export type FragmentToken1024 =
  | FragmentSelf1024["__typename"]
  | FragmentSelf1024["typenameHint"] | FragmentToken1022 | FragmentToken1023;
