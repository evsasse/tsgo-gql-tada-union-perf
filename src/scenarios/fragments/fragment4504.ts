import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4502 } from "./fragment4502";
import type { FragmentToken4503 } from "./fragment4503";

export const FRAGMENT_4504 = gql(`
  fragment Fragment4504 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult4504 = ResultOf<typeof FRAGMENT_4504>;
type FragmentSelf4504 = NonNullable<FragmentResult4504>;

export type FragmentToken4504 =
  | FragmentSelf4504["__typename"]
  | FragmentSelf4504["typenameHint"] | FragmentToken4502 | FragmentToken4503;
