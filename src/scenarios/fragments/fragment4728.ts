import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4726 } from "./fragment4726";
import type { FragmentToken4727 } from "./fragment4727";

export const FRAGMENT_4728 = gql(`
  fragment Fragment4728 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult4728 = ResultOf<typeof FRAGMENT_4728>;
type FragmentSelf4728 = NonNullable<FragmentResult4728>;

export type FragmentToken4728 =
  | FragmentSelf4728["__typename"]
  | FragmentSelf4728["typenameHint"] | FragmentToken4726 | FragmentToken4727;
