import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4845 } from "./fragment4845";
import type { FragmentToken4846 } from "./fragment4846";

export const FRAGMENT_4847 = gql(`
  fragment Fragment4847 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult4847 = ResultOf<typeof FRAGMENT_4847>;
type FragmentSelf4847 = NonNullable<FragmentResult4847>;

export type FragmentToken4847 =
  | FragmentSelf4847["__typename"]
  | FragmentSelf4847["typenameHint"] | FragmentToken4845 | FragmentToken4846;
