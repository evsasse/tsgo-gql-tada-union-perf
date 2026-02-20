import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4882 } from "./fragment4882";
import type { FragmentToken4883 } from "./fragment4883";

export const FRAGMENT_4884 = gql(`
  fragment Fragment4884 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult4884 = ResultOf<typeof FRAGMENT_4884>;
type FragmentSelf4884 = NonNullable<FragmentResult4884>;

export type FragmentToken4884 =
  | FragmentSelf4884["__typename"]
  | FragmentSelf4884["typenameHint"] | FragmentToken4882 | FragmentToken4883;
