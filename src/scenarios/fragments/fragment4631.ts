import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4629 } from "./fragment4629";
import type { FragmentToken4630 } from "./fragment4630";

export const FRAGMENT_4631 = gql(`
  fragment Fragment4631 on Member150 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_150
    memberCount_150
    memberMetric_150
  }
`);

type FragmentResult4631 = ResultOf<typeof FRAGMENT_4631>;
type FragmentSelf4631 = NonNullable<FragmentResult4631>;

export type FragmentToken4631 =
  | FragmentSelf4631["__typename"]
  | FragmentSelf4631["typenameHint"] | FragmentToken4629 | FragmentToken4630;
