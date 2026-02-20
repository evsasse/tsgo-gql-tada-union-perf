import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4298 } from "./fragment4298";
import type { FragmentToken4299 } from "./fragment4299";

export const FRAGMENT_4300 = gql(`
  fragment Fragment4300 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult4300 = ResultOf<typeof FRAGMENT_4300>;
type FragmentSelf4300 = NonNullable<FragmentResult4300>;

export type FragmentToken4300 =
  | FragmentSelf4300["__typename"]
  | FragmentSelf4300["typenameHint"] | FragmentToken4298 | FragmentToken4299;
