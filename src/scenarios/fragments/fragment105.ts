import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken103 } from "./fragment103";
import type { FragmentToken104 } from "./fragment104";

export const FRAGMENT_105 = gql(`
  fragment Fragment105 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult105 = ResultOf<typeof FRAGMENT_105>;
type FragmentSelf105 = NonNullable<FragmentResult105>;

export type FragmentToken105 =
  | FragmentSelf105["__typename"]
  | FragmentSelf105["typenameHint"] | FragmentToken103 | FragmentToken104;
