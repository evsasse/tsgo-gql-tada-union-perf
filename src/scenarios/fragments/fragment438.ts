import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken436 } from "./fragment436";
import type { FragmentToken437 } from "./fragment437";

export const FRAGMENT_438 = gql(`
  fragment Fragment438 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult438 = ResultOf<typeof FRAGMENT_438>;
type FragmentSelf438 = NonNullable<FragmentResult438>;

export type FragmentToken438 =
  | FragmentSelf438["__typename"]
  | FragmentSelf438["typenameHint"] | FragmentToken436 | FragmentToken437;
