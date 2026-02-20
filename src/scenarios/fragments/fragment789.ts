import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken787 } from "./fragment787";
import type { FragmentToken788 } from "./fragment788";

export const FRAGMENT_789 = gql(`
  fragment Fragment789 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult789 = ResultOf<typeof FRAGMENT_789>;
type FragmentSelf789 = NonNullable<FragmentResult789>;

export type FragmentToken789 =
  | FragmentSelf789["__typename"]
  | FragmentSelf789["typenameHint"] | FragmentToken787 | FragmentToken788;
