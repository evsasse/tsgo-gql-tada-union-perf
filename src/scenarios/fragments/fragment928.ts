import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken926 } from "./fragment926";
import type { FragmentToken927 } from "./fragment927";

export const FRAGMENT_928 = gql(`
  fragment Fragment928 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult928 = ResultOf<typeof FRAGMENT_928>;
type FragmentSelf928 = NonNullable<FragmentResult928>;

export type FragmentToken928 =
  | FragmentSelf928["__typename"]
  | FragmentSelf928["typenameHint"] | FragmentToken926 | FragmentToken927;
