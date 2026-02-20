import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4847 } from "./fragment4847";
import type { FragmentToken4848 } from "./fragment4848";

export const FRAGMENT_4849 = gql(`
  fragment Fragment4849 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult4849 = ResultOf<typeof FRAGMENT_4849>;
type FragmentSelf4849 = NonNullable<FragmentResult4849>;

export type FragmentToken4849 =
  | FragmentSelf4849["__typename"]
  | FragmentSelf4849["typenameHint"] | FragmentToken4847 | FragmentToken4848;
