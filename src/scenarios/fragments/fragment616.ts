import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken614 } from "./fragment614";
import type { FragmentToken615 } from "./fragment615";

export const FRAGMENT_616 = gql(`
  fragment Fragment616 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult616 = ResultOf<typeof FRAGMENT_616>;
type FragmentSelf616 = NonNullable<FragmentResult616>;

export type FragmentToken616 =
  | FragmentSelf616["__typename"]
  | FragmentSelf616["typenameHint"] | FragmentToken614 | FragmentToken615;
