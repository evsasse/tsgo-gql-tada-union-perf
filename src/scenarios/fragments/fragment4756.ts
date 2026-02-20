import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4754 } from "./fragment4754";
import type { FragmentToken4755 } from "./fragment4755";

export const FRAGMENT_4756 = gql(`
  fragment Fragment4756 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult4756 = ResultOf<typeof FRAGMENT_4756>;
type FragmentSelf4756 = NonNullable<FragmentResult4756>;

export type FragmentToken4756 =
  | FragmentSelf4756["__typename"]
  | FragmentSelf4756["typenameHint"] | FragmentToken4754 | FragmentToken4755;
