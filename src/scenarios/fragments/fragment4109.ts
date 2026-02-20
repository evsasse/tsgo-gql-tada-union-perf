import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4107 } from "./fragment4107";
import type { FragmentToken4108 } from "./fragment4108";

export const FRAGMENT_4109 = gql(`
  fragment Fragment4109 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult4109 = ResultOf<typeof FRAGMENT_4109>;
type FragmentSelf4109 = NonNullable<FragmentResult4109>;

export type FragmentToken4109 =
  | FragmentSelf4109["__typename"]
  | FragmentSelf4109["typenameHint"] | FragmentToken4107 | FragmentToken4108;
