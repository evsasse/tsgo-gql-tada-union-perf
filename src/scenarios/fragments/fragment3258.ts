import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3256 } from "./fragment3256";
import type { FragmentToken3257 } from "./fragment3257";

export const FRAGMENT_3258 = gql(`
  fragment Fragment3258 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult3258 = ResultOf<typeof FRAGMENT_3258>;
type FragmentSelf3258 = NonNullable<FragmentResult3258>;

export type FragmentToken3258 =
  | FragmentSelf3258["__typename"]
  | FragmentSelf3258["typenameHint"] | FragmentToken3256 | FragmentToken3257;
