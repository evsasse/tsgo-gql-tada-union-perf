import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4778 } from "./fragment4778";
import type { FragmentToken4779 } from "./fragment4779";

export const FRAGMENT_4780 = gql(`
  fragment Fragment4780 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult4780 = ResultOf<typeof FRAGMENT_4780>;
type FragmentSelf4780 = NonNullable<FragmentResult4780>;

export type FragmentToken4780 =
  | FragmentSelf4780["__typename"]
  | FragmentSelf4780["typenameHint"] | FragmentToken4778 | FragmentToken4779;
