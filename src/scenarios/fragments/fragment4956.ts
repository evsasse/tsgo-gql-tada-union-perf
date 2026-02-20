import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4954 } from "./fragment4954";
import type { FragmentToken4955 } from "./fragment4955";

export const FRAGMENT_4956 = gql(`
  fragment Fragment4956 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult4956 = ResultOf<typeof FRAGMENT_4956>;
type FragmentSelf4956 = NonNullable<FragmentResult4956>;

export type FragmentToken4956 =
  | FragmentSelf4956["__typename"]
  | FragmentSelf4956["typenameHint"] | FragmentToken4954 | FragmentToken4955;
