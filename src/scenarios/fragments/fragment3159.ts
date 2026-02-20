import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3157 } from "./fragment3157";
import type { FragmentToken3158 } from "./fragment3158";

export const FRAGMENT_3159 = gql(`
  fragment Fragment3159 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult3159 = ResultOf<typeof FRAGMENT_3159>;
type FragmentSelf3159 = NonNullable<FragmentResult3159>;

export type FragmentToken3159 =
  | FragmentSelf3159["__typename"]
  | FragmentSelf3159["typenameHint"] | FragmentToken3157 | FragmentToken3158;
