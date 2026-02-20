import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4564 } from "./fragment4564";
import type { FragmentToken4565 } from "./fragment4565";

export const FRAGMENT_4566 = gql(`
  fragment Fragment4566 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult4566 = ResultOf<typeof FRAGMENT_4566>;
type FragmentSelf4566 = NonNullable<FragmentResult4566>;

export type FragmentToken4566 =
  | FragmentSelf4566["__typename"]
  | FragmentSelf4566["typenameHint"] | FragmentToken4564 | FragmentToken4565;
