import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4981 } from "./fragment4981";
import type { FragmentToken4982 } from "./fragment4982";

export const FRAGMENT_4983 = gql(`
  fragment Fragment4983 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult4983 = ResultOf<typeof FRAGMENT_4983>;
type FragmentSelf4983 = NonNullable<FragmentResult4983>;

export type FragmentToken4983 =
  | FragmentSelf4983["__typename"]
  | FragmentSelf4983["typenameHint"] | FragmentToken4981 | FragmentToken4982;
