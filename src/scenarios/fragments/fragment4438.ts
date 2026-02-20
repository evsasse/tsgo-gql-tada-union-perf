import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4436 } from "./fragment4436";
import type { FragmentToken4437 } from "./fragment4437";

export const FRAGMENT_4438 = gql(`
  fragment Fragment4438 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult4438 = ResultOf<typeof FRAGMENT_4438>;
type FragmentSelf4438 = NonNullable<FragmentResult4438>;

export type FragmentToken4438 =
  | FragmentSelf4438["__typename"]
  | FragmentSelf4438["typenameHint"] | FragmentToken4436 | FragmentToken4437;
