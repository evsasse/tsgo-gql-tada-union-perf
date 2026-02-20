import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4612 } from "./fragment4612";
import type { FragmentToken4613 } from "./fragment4613";

export const FRAGMENT_4614 = gql(`
  fragment Fragment4614 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult4614 = ResultOf<typeof FRAGMENT_4614>;
type FragmentSelf4614 = NonNullable<FragmentResult4614>;

export type FragmentToken4614 =
  | FragmentSelf4614["__typename"]
  | FragmentSelf4614["typenameHint"] | FragmentToken4612 | FragmentToken4613;
