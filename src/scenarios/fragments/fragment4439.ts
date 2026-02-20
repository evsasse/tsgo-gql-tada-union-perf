import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4437 } from "./fragment4437";
import type { FragmentToken4438 } from "./fragment4438";

export const FRAGMENT_4439 = gql(`
  fragment Fragment4439 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult4439 = ResultOf<typeof FRAGMENT_4439>;
type FragmentSelf4439 = NonNullable<FragmentResult4439>;

export type FragmentToken4439 =
  | FragmentSelf4439["__typename"]
  | FragmentSelf4439["typenameHint"] | FragmentToken4437 | FragmentToken4438;
