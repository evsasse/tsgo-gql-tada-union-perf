import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4218 } from "./fragment4218";
import type { FragmentToken4219 } from "./fragment4219";

export const FRAGMENT_4220 = gql(`
  fragment Fragment4220 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult4220 = ResultOf<typeof FRAGMENT_4220>;
type FragmentSelf4220 = NonNullable<FragmentResult4220>;

export type FragmentToken4220 =
  | FragmentSelf4220["__typename"]
  | FragmentSelf4220["typenameHint"] | FragmentToken4218 | FragmentToken4219;
