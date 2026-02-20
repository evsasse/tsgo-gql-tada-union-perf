import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken029 } from "./fragment029";
import type { FragmentToken030 } from "./fragment030";

export const FRAGMENT_031 = gql(`
  fragment Fragment031 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult031 = ResultOf<typeof FRAGMENT_031>;
type FragmentSelf031 = NonNullable<FragmentResult031>;

export type FragmentToken031 =
  | FragmentSelf031["__typename"]
  | FragmentSelf031["typenameHint"] | FragmentToken029 | FragmentToken030;
