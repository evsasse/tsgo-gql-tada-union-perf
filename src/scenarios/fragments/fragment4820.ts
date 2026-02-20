import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4818 } from "./fragment4818";
import type { FragmentToken4819 } from "./fragment4819";

export const FRAGMENT_4820 = gql(`
  fragment Fragment4820 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult4820 = ResultOf<typeof FRAGMENT_4820>;
type FragmentSelf4820 = NonNullable<FragmentResult4820>;

export type FragmentToken4820 =
  | FragmentSelf4820["__typename"]
  | FragmentSelf4820["typenameHint"] | FragmentToken4818 | FragmentToken4819;
