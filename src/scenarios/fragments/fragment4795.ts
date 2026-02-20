import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4793 } from "./fragment4793";
import type { FragmentToken4794 } from "./fragment4794";

export const FRAGMENT_4795 = gql(`
  fragment Fragment4795 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult4795 = ResultOf<typeof FRAGMENT_4795>;
type FragmentSelf4795 = NonNullable<FragmentResult4795>;

export type FragmentToken4795 =
  | FragmentSelf4795["__typename"]
  | FragmentSelf4795["typenameHint"] | FragmentToken4793 | FragmentToken4794;
