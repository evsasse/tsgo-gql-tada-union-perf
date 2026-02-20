import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1895 } from "./fragment1895";
import type { FragmentToken1896 } from "./fragment1896";

export const FRAGMENT_1897 = gql(`
  fragment Fragment1897 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult1897 = ResultOf<typeof FRAGMENT_1897>;
type FragmentSelf1897 = NonNullable<FragmentResult1897>;

export type FragmentToken1897 =
  | FragmentSelf1897["__typename"]
  | FragmentSelf1897["typenameHint"] | FragmentToken1895 | FragmentToken1896;
