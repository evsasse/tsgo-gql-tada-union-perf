import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3077 } from "./fragment3077";
import type { FragmentToken3078 } from "./fragment3078";

export const FRAGMENT_3079 = gql(`
  fragment Fragment3079 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult3079 = ResultOf<typeof FRAGMENT_3079>;
type FragmentSelf3079 = NonNullable<FragmentResult3079>;

export type FragmentToken3079 =
  | FragmentSelf3079["__typename"]
  | FragmentSelf3079["typenameHint"] | FragmentToken3077 | FragmentToken3078;
