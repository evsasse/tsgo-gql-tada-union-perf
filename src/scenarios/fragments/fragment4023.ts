import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4021 } from "./fragment4021";
import type { FragmentToken4022 } from "./fragment4022";

export const FRAGMENT_4023 = gql(`
  fragment Fragment4023 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult4023 = ResultOf<typeof FRAGMENT_4023>;
type FragmentSelf4023 = NonNullable<FragmentResult4023>;

export type FragmentToken4023 =
  | FragmentSelf4023["__typename"]
  | FragmentSelf4023["typenameHint"] | FragmentToken4021 | FragmentToken4022;
