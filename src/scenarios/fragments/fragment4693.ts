import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4691 } from "./fragment4691";
import type { FragmentToken4692 } from "./fragment4692";

export const FRAGMENT_4693 = gql(`
  fragment Fragment4693 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult4693 = ResultOf<typeof FRAGMENT_4693>;
type FragmentSelf4693 = NonNullable<FragmentResult4693>;

export type FragmentToken4693 =
  | FragmentSelf4693["__typename"]
  | FragmentSelf4693["typenameHint"] | FragmentToken4691 | FragmentToken4692;
