import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4701 } from "./fragment4701";
import type { FragmentToken4702 } from "./fragment4702";

export const FRAGMENT_4703 = gql(`
  fragment Fragment4703 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult4703 = ResultOf<typeof FRAGMENT_4703>;
type FragmentSelf4703 = NonNullable<FragmentResult4703>;

export type FragmentToken4703 =
  | FragmentSelf4703["__typename"]
  | FragmentSelf4703["typenameHint"] | FragmentToken4701 | FragmentToken4702;
