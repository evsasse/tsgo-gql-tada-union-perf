import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4145 } from "./fragment4145";
import type { FragmentToken4146 } from "./fragment4146";

export const FRAGMENT_4147 = gql(`
  fragment Fragment4147 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult4147 = ResultOf<typeof FRAGMENT_4147>;
type FragmentSelf4147 = NonNullable<FragmentResult4147>;

export type FragmentToken4147 =
  | FragmentSelf4147["__typename"]
  | FragmentSelf4147["typenameHint"] | FragmentToken4145 | FragmentToken4146;
