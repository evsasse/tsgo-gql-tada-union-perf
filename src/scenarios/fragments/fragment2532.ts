import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2530 } from "./fragment2530";
import type { FragmentToken2531 } from "./fragment2531";

export const FRAGMENT_2532 = gql(`
  fragment Fragment2532 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult2532 = ResultOf<typeof FRAGMENT_2532>;
type FragmentSelf2532 = NonNullable<FragmentResult2532>;

export type FragmentToken2532 =
  | FragmentSelf2532["__typename"]
  | FragmentSelf2532["typenameHint"] | FragmentToken2530 | FragmentToken2531;
