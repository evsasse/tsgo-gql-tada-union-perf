import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4850 } from "./fragment4850";
import type { FragmentToken4851 } from "./fragment4851";

export const FRAGMENT_4852 = gql(`
  fragment Fragment4852 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult4852 = ResultOf<typeof FRAGMENT_4852>;
type FragmentSelf4852 = NonNullable<FragmentResult4852>;

export type FragmentToken4852 =
  | FragmentSelf4852["__typename"]
  | FragmentSelf4852["typenameHint"] | FragmentToken4850 | FragmentToken4851;
