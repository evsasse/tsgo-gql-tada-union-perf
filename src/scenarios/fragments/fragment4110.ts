import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4108 } from "./fragment4108";
import type { FragmentToken4109 } from "./fragment4109";

export const FRAGMENT_4110 = gql(`
  fragment Fragment4110 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult4110 = ResultOf<typeof FRAGMENT_4110>;
type FragmentSelf4110 = NonNullable<FragmentResult4110>;

export type FragmentToken4110 =
  | FragmentSelf4110["__typename"]
  | FragmentSelf4110["typenameHint"] | FragmentToken4108 | FragmentToken4109;
