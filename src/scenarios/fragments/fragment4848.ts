import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4846 } from "./fragment4846";
import type { FragmentToken4847 } from "./fragment4847";

export const FRAGMENT_4848 = gql(`
  fragment Fragment4848 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult4848 = ResultOf<typeof FRAGMENT_4848>;
type FragmentSelf4848 = NonNullable<FragmentResult4848>;

export type FragmentToken4848 =
  | FragmentSelf4848["__typename"]
  | FragmentSelf4848["typenameHint"] | FragmentToken4846 | FragmentToken4847;
