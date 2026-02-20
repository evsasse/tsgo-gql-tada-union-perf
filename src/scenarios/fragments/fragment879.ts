import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken877 } from "./fragment877";
import type { FragmentToken878 } from "./fragment878";

export const FRAGMENT_879 = gql(`
  fragment Fragment879 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult879 = ResultOf<typeof FRAGMENT_879>;
type FragmentSelf879 = NonNullable<FragmentResult879>;

export type FragmentToken879 =
  | FragmentSelf879["__typename"]
  | FragmentSelf879["typenameHint"] | FragmentToken877 | FragmentToken878;
