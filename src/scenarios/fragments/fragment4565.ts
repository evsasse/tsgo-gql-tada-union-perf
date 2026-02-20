import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4563 } from "./fragment4563";
import type { FragmentToken4564 } from "./fragment4564";

export const FRAGMENT_4565 = gql(`
  fragment Fragment4565 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult4565 = ResultOf<typeof FRAGMENT_4565>;
type FragmentSelf4565 = NonNullable<FragmentResult4565>;

export type FragmentToken4565 =
  | FragmentSelf4565["__typename"]
  | FragmentSelf4565["typenameHint"] | FragmentToken4563 | FragmentToken4564;
