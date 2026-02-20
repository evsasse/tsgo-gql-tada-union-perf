import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4630 } from "./fragment4630";
import type { FragmentToken4631 } from "./fragment4631";

export const FRAGMENT_4632 = gql(`
  fragment Fragment4632 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult4632 = ResultOf<typeof FRAGMENT_4632>;
type FragmentSelf4632 = NonNullable<FragmentResult4632>;

export type FragmentToken4632 =
  | FragmentSelf4632["__typename"]
  | FragmentSelf4632["typenameHint"] | FragmentToken4630 | FragmentToken4631;
