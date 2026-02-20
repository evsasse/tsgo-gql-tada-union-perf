import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4647 } from "./fragment4647";
import type { FragmentToken4648 } from "./fragment4648";

export const FRAGMENT_4649 = gql(`
  fragment Fragment4649 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult4649 = ResultOf<typeof FRAGMENT_4649>;
type FragmentSelf4649 = NonNullable<FragmentResult4649>;

export type FragmentToken4649 =
  | FragmentSelf4649["__typename"]
  | FragmentSelf4649["typenameHint"] | FragmentToken4647 | FragmentToken4648;
