import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4515 } from "./fragment4515";
import type { FragmentToken4516 } from "./fragment4516";

export const FRAGMENT_4517 = gql(`
  fragment Fragment4517 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult4517 = ResultOf<typeof FRAGMENT_4517>;
type FragmentSelf4517 = NonNullable<FragmentResult4517>;

export type FragmentToken4517 =
  | FragmentSelf4517["__typename"]
  | FragmentSelf4517["typenameHint"] | FragmentToken4515 | FragmentToken4516;
