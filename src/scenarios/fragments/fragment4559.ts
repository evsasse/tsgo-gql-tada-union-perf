import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4557 } from "./fragment4557";
import type { FragmentToken4558 } from "./fragment4558";

export const FRAGMENT_4559 = gql(`
  fragment Fragment4559 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult4559 = ResultOf<typeof FRAGMENT_4559>;
type FragmentSelf4559 = NonNullable<FragmentResult4559>;

export type FragmentToken4559 =
  | FragmentSelf4559["__typename"]
  | FragmentSelf4559["typenameHint"] | FragmentToken4557 | FragmentToken4558;
