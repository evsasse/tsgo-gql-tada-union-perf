import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4808 } from "./fragment4808";
import type { FragmentToken4809 } from "./fragment4809";

export const FRAGMENT_4810 = gql(`
  fragment Fragment4810 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult4810 = ResultOf<typeof FRAGMENT_4810>;
type FragmentSelf4810 = NonNullable<FragmentResult4810>;

export type FragmentToken4810 =
  | FragmentSelf4810["__typename"]
  | FragmentSelf4810["typenameHint"] | FragmentToken4808 | FragmentToken4809;
