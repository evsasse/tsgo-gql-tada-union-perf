import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken746 } from "./fragment746";
import type { FragmentToken747 } from "./fragment747";

export const FRAGMENT_748 = gql(`
  fragment Fragment748 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult748 = ResultOf<typeof FRAGMENT_748>;
type FragmentSelf748 = NonNullable<FragmentResult748>;

export type FragmentToken748 =
  | FragmentSelf748["__typename"]
  | FragmentSelf748["typenameHint"] | FragmentToken746 | FragmentToken747;
