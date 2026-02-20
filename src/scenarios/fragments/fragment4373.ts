import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4371 } from "./fragment4371";
import type { FragmentToken4372 } from "./fragment4372";

export const FRAGMENT_4373 = gql(`
  fragment Fragment4373 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult4373 = ResultOf<typeof FRAGMENT_4373>;
type FragmentSelf4373 = NonNullable<FragmentResult4373>;

export type FragmentToken4373 =
  | FragmentSelf4373["__typename"]
  | FragmentSelf4373["typenameHint"] | FragmentToken4371 | FragmentToken4372;
