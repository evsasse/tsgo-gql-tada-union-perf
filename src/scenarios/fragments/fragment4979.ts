import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4977 } from "./fragment4977";
import type { FragmentToken4978 } from "./fragment4978";

export const FRAGMENT_4979 = gql(`
  fragment Fragment4979 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult4979 = ResultOf<typeof FRAGMENT_4979>;
type FragmentSelf4979 = NonNullable<FragmentResult4979>;

export type FragmentToken4979 =
  | FragmentSelf4979["__typename"]
  | FragmentSelf4979["typenameHint"] | FragmentToken4977 | FragmentToken4978;
