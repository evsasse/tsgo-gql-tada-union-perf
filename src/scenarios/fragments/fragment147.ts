import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken145 } from "./fragment145";
import type { FragmentToken146 } from "./fragment146";

export const FRAGMENT_147 = gql(`
  fragment Fragment147 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult147 = ResultOf<typeof FRAGMENT_147>;
type FragmentSelf147 = NonNullable<FragmentResult147>;

export type FragmentToken147 =
  | FragmentSelf147["__typename"]
  | FragmentSelf147["typenameHint"] | FragmentToken145 | FragmentToken146;
