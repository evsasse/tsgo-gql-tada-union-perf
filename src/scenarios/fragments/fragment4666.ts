import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4664 } from "./fragment4664";
import type { FragmentToken4665 } from "./fragment4665";

export const FRAGMENT_4666 = gql(`
  fragment Fragment4666 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult4666 = ResultOf<typeof FRAGMENT_4666>;
type FragmentSelf4666 = NonNullable<FragmentResult4666>;

export type FragmentToken4666 =
  | FragmentSelf4666["__typename"]
  | FragmentSelf4666["typenameHint"] | FragmentToken4664 | FragmentToken4665;
