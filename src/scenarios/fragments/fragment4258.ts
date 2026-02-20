import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4256 } from "./fragment4256";
import type { FragmentToken4257 } from "./fragment4257";

export const FRAGMENT_4258 = gql(`
  fragment Fragment4258 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult4258 = ResultOf<typeof FRAGMENT_4258>;
type FragmentSelf4258 = NonNullable<FragmentResult4258>;

export type FragmentToken4258 =
  | FragmentSelf4258["__typename"]
  | FragmentSelf4258["typenameHint"] | FragmentToken4256 | FragmentToken4257;
