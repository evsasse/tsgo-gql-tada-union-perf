import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken481 } from "./fragment481";
import type { FragmentToken482 } from "./fragment482";

export const FRAGMENT_483 = gql(`
  fragment Fragment483 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult483 = ResultOf<typeof FRAGMENT_483>;
type FragmentSelf483 = NonNullable<FragmentResult483>;

export type FragmentToken483 =
  | FragmentSelf483["__typename"]
  | FragmentSelf483["typenameHint"] | FragmentToken481 | FragmentToken482;
